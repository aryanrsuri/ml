const std = @import("std");

/// Bound output signal to sigmoid
pub fn sigmoid(x: f64) f64 {
    return 1 / (1 + std.math.exp(-x));
}

/// Bound output signal to rectified linear unit
pub fn ReLu(x: isize) i64 {
    return if (x > 0) @as(i64, x) else 0;
}

/// Bound output signal to leaky ReLu
pub fn LeReLu(x: isize) i64 {
    return if (x > 0) x else std.math.exp(@as(i64, x));
}
