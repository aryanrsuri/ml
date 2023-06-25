const std = @import("std");
const matrix = @import("matrix.zig");
const algebra = @import("algebra.zig");
const Map = matrix.Map;
const Matrix = matrix.Matrix;
const sigmoid = algebra.sigmoid;
const tanh = algebra.tanh;

pub const xor = struct {
    const Self = @This();
    inputs: Matrix,
    w1: Matrix,
    w2: Matrix,
    a1: Matrix,
    a2: Matrix,
    b1: Matrix,
    b2: Matrix,

    fn deinit(self: *Self) void {
        self.a1.deinit();
        self.a2.deinit();
        self.b1.deinit();
        self.b2.deinit();
        self.w1.deinit();
        self.w2.deinit();
        self.inputs.deinit();
    }
};

pub fn xor_model(alloc: std.mem.Allocator) !void {
    var xm: xor = .{
        .inputs = try Matrix.init(alloc, 1, 2),
        .w1 = try Matrix.init(alloc, 1, 2),
        .w2 = try Matrix.init(alloc, 1, 2),
        .a1 = try Matrix.init(alloc, 1, 2),
        .a2 = try Matrix.init(alloc, 1, 2),
        .b1 = try Matrix.init(alloc, 1, 2),
        .b2 = try Matrix.init(alloc, 1, 2),
    };
    defer xm.deinit();
    _ = try xm.inputs.data.append(1);
    _ = try xm.inputs.data.append(2);
    _ = try xm.w1.fill(1);
    _ = try xm.w2.fill(1);
    _ = try xm.b1.fill(1);
    _ = try xm.b2.fill(1);

    var i: usize = 0;
    var j: usize = 0;
    while (i < 2) : (i += 1) {
        while (j < 2) : (j += 1) {
            const m1: ?Map = xm.inputs.enumerate(0, 0);
            const m2: ?Map = xm.inputs.enumerate(0, 1);

            xm.inputs.data.items[m1.?.pos] = @floatFromInt(f64, i);
            xm.inputs.data.items[m2.?.pos] = @floatFromInt(f64, j);
            xm.a2.data = forward_propogate(xm);
        }
    }
}

fn forward_propogate(model: xor) std.ArrayList(f64) {
    model.inputs.multiply(&model.w1, &model.a1);
    model.a1.sum(model.b1);
    model.a1.apply(sigmoid);
    model.a1.multiply(model.w2, model.a2);
    model.a2.sum(model.b2);
    model.a2.apply(sigmoid);

    return model.a2.data;
}

test "xor" {
    _ = try xor_model(std.testing.allocator);
}

// fn cost(w: f64, w2: f64, b: f64, training_set: [4][3]f64) f64 {
//     var c: f64 = 0;
//     for (training_set) |row| {
//         const linf = tanh((row[0] * w) + (row[1] * w2) + b);
//         const diff = linf - row[2];
//         c += diff * diff;
//     }
//
//     c /= training_set.len;
//     return c;
// }
//
// pub fn lc_model(set: [4][3]f64) ![4]f64 {
//     const ts = set;
//     var rn = rg.init(0);
//     var w = rn.random().float(f64) * 1;
//     var w2 = rn.random().float(f64) * 1;
//     var b = rn.random().float(f64) * 1;
//     var i: usize = 0;
//
//     while (i < gen) : (i += 1) {
//         const cache = cost(w, w2, b, ts);
//         const dw = (cost(w + eps, w2, b, ts) - cache) / eps;
//         const dw2 = (cost(w, w2 + eps, b, ts) - cache) / eps;
//         const db = (cost(w, w2, b + eps, ts) - cache) / eps;
//         w -= k * dw;
//         w2 -= k * dw2;
//         b -= k * db;
//     }
//
//     return [4]f64{ w, w2, b, cost(w, w2, b, ts) };
// }
