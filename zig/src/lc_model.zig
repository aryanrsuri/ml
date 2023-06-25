const std = @import("std");
const alg = @import("algebra.zig");
const rg = std.rand.DefaultPrng;
const sigmoid = alg.sigmoid;
const binaryrect = alg.BinaryRe;
const tanh = alg.tanh;

const eps: f64 = 1e-3;
const k: f64 = 1e-1;
const gen = 1_000_000;

const OR_SET = [4][3]f64{
    [_]f64{ 0, 0, 0 },
    [_]f64{ 1, 0, 1 },
    [_]f64{ 0, 1, 1 },
    [_]f64{ 1, 1, 1 },
};

const AND_SET = [4][3]f64{
    [_]f64{ 0, 0, 0 },
    [_]f64{ 1, 0, 0 },
    [_]f64{ 0, 1, 0 },
    [_]f64{ 1, 1, 1 },
};
const NAND_SET = [4][3]f64{
    [_]f64{ 0, 0, 1 },
    [_]f64{ 1, 0, 1 },
    [_]f64{ 0, 1, 1 },
    [_]f64{ 1, 1, 0 },
};

fn cost(w: f64, w2: f64, b: f64, training_set: [4][3]f64) f64 {
    var c: f64 = 0;
    for (training_set) |row| {
        const linf = tanh((row[0] * w) + (row[1] * w2) + b);
        const diff = linf - row[2];
        c += diff * diff;
    }

    c /= training_set.len;
    return c;
}

pub fn lc_model(set: [4][3]f64) ![4]f64 {
    const ts = set;
    var rn = rg.init(0);
    var w = rn.random().float(f64) * 1;
    var w2 = rn.random().float(f64) * 1;
    var b = rn.random().float(f64) * 1;
    var i: usize = 0;

    while (i < gen) : (i += 1) {
        const cache = cost(w, w2, b, ts);
        const dw = (cost(w + eps, w2, b, ts) - cache) / eps;
        const dw2 = (cost(w, w2 + eps, b, ts) - cache) / eps;
        const db = (cost(w, w2, b + eps, ts) - cache) / eps;
        w -= k * dw;
        w2 -= k * dw2;
        b -= k * db;
    }

    return [4]f64{ w, w2, b, cost(w, w2, b, ts) };
}

pub fn main() !void {
    const res = try lc_model(NAND_SET);
    std.debug.print("{any}\n", .{res});
}

test "Linear Model" {
    const y = try lc_model(NAND_SET);
    for (NAND_SET) |row| {
        var res = (y[0] * row[0]) + (y[1] * row[1]) + y[2];
        res = binaryrect(res);
        std.debug.print("\n{} ^ {}  = {} and exp {} (COST: {})\n", .{ row[0], row[1], res, row[2], y[3] });
    }
}
