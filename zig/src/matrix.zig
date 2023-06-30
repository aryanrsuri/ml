const std = @import("std");
const alg = @import("algebra.zig");
const sigmoid = alg.sigmoid;
const tanh = alg.tanh;
const ReLu = alg.ReLu;

pub const Map = struct { pos: usize, elem: f64 };
pub const Matrix = struct {
    const Self = @This();
    m: usize,
    n: usize,
    data: std.ArrayList(f64),
    allocator: std.mem.Allocator,

    pub fn init(alloc: std.mem.Allocator, comptime m: usize, comptime n: usize) !Self {
        var space = m * n;
        var zeros = try std.ArrayList(f64).initCapacity(alloc, space);
        try zeros.appendNTimes(0, space);
        return .{
            .m = m,
            .n = n,
            .data = zeros,
            .allocator = alloc,
        };
    }

    pub fn deinit(self: *Self) void {
        self.data.deinit();
    }

    fn enumerate(self: *Self, m: usize, n: usize) ?Map {
        if (m > self.m or n > self.n or m < 0 or n < 0) {
            return null;
        }
        const position: usize = (m) * self.n + n;
        const map = Map{ .pos = position, .elem = self.data.items[position] };
        return map;
    }

    pub fn fill(self: *Self, x: f64) !void {
        for (0..self.data.capacity) |i| {
            try self.data.replaceRange(i, 1, &[1]f64{x});
        }
    }

    pub fn apply(self: *Self, comptime func: fn (f64) f64) !void {
        var i: usize = 0;
        while (i < self.m) : (i += 1) {
            var j: usize = 0;
            while (j < self.n) : (j += 1) {
                const map = self.enumerate(i, j);
                if (map == null) return error.NullSpace;
                self.data.items[map.?.pos] = func(map.?.elem);
            }
        }
    }

    pub fn multiply(self: *Self, B: *Matrix, C: *Matrix) !*Matrix {
        if (self.n != B.n or C.m != self.m or C.n != B.n) {
            return error.MatrixSpaceUnequal;
        }
        var i: usize = 0;
        while (i < C.m) : (i += 1) {
            var j: usize = 0;
            while (j < C.n) : (j += 1) {
                var k: usize = 0;
                const map_C = C.enumerate(i, j);
                if (map_C == null) return error.NullSpace;
                while (k < self.n) : (k += 1) {
                    const map_A = self.enumerate(i, k);
                    const map_B = B.enumerate(k, j);
                    C.data.items[map_C.?.pos] += map_A.?.elem * map_B.?.elem;
                }
            }
        }

        return C;
    }

    pub fn sum(self: *Self, B: *Matrix) !void {
        if (self.n != B.n) {
            return error.MatrixSpaceUnequal;
        }
        var i: usize = 0;
        while (i < B.m) : (i += 1) {
            var j: usize = 0;
            while (j < B.n) : (j += 1) {
                const map_A = self.enumerate(i, j);
                const map_B = B.enumerate(i, j);
                self.data.items[map_A.?.pos] = map_A.?.elem + map_B.?.elem;
            }
        }
    }

    pub fn render(self: *Self, title: []const u8) void {
        std.debug.print("\n        {s} \n[", .{title});
        for (0..self.data.capacity) |i| {
            std.debug.print(" {} ", .{self.data.items[i]});
        }
        std.debug.print("]\n", .{});
    }
};

test "matrix" {
    std.debug.print("\n", .{});
    var m = try Matrix.init(std.testing.allocator, 2, 2);
    var b = try Matrix.init(std.testing.allocator, 2, 2);
    var c = try Matrix.init(std.testing.allocator, 2, 2);
    // var s = [_]f64{ 1, 2, 3, 4 };
    defer {
        m.deinit();
        b.deinit();
        c.deinit();
    }

    _ = try m.fill(3);
    _ = try b.fill(3);
    m.render("m");
    b.render("b");
    _ = try m.sum(&b);
    m.render("summed m of b");
    _ = try m.multiply(&b, &c);
    c.render("result of multipling m and v");
    _ = try c.apply(sigmoid);
    c.render("sigmoid");
    _ = try c.apply(tanh);
    c.render("sigmoid -> tanh");
}
