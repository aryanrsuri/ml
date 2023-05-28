const std = @import("std");
const alg = @import("algebra.zig");

const rg = std.rand.DefaultPrng;

const eps: f64 = 1e-3;
const k: f64 = 1e-3;
const gen = 9_999_999;

const training_set = [4][2]f64{
    [_]f64{ 2, 4 },
    [_]f64{ 3, 6 },
    [_]f64{ 4, 8 },
    [_]f64{ 5, 10 },
};

fn cost(w: f64, b: f64) !f64 {
    var c: f64 = 0;
    for (training_set) |row| {
        var x = row[0];
        var e = row[1];
        var y = x * w + b;
        var diff = e - y;
        c += diff * diff;
    }

    c /= 4;
    return c;
}
pub fn linear_model() ![3]f64 {
    var rn = rg.init(0);
    var w = rn.random().float(f64);
    var b = rn.random().float(f64);
    var i: usize = 0;

    while (i < gen) {
        const cache = try cost(w, b);
        const dw = (try cost(w + eps, b) - cache) / eps;
        const db = (try cost(w, b + eps) - cache) / eps;
        w -= k * dw;
        b -= k * db;

        i += 1;
    }

    return [3]f64{ w, b, try cost(w, b) };
}

pub fn main() !void {
    const res = try linear_model();
    std.debug.print("{any}\n", .{res});
}

test "Linear Model" {
    // const y = try linear_model();
    // for (training_set) |row| {
    //     const res = y[0] * row[0] + y[1];
    //     std.debug.print("\n{} * {} + {} = {} exp {}\n", .{ row[0], y[0], y[1], res, row[1] });
    // }
    //
    var r = alg.sigmoid(3);

    std.debug.print("\n{}\n", .{r});
}
