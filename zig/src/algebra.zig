const std = @import("std");

/// Various activiation functions
pub const activation_functions = struct {
    /// Bound output signal to sigmoid
    /// @param {f64} x signal
    /// @returns {f64} sigmod(signal)
    pub fn sigmoid(x: f64) f64 {
        return 1 / (1 + std.math.exp(-x));
    }

    /// Bound output signal to binary return
    /// @param {f64} x signal
    /// @returns {f64} < 1 if pos , 0 else >
    pub fn BinaryRe(x: f64) f64 {
        return if (x > 0) 1 else 0;
    }
    /// Bound output signal to rectified linear unit
    /// @param {f64} x signal
    /// @returns {f64} < signal is pos, 0 else >
    pub fn ReLu(x: f64) f64 {
        return if (x > 0) x else 0;
    }

    /// Bound output signal to leaky rectified linear unit
    /// @param {f64} x signal
    /// @returns {f64} < signal is pos, exp(signal) else >
    pub fn LeReLu(x: f64) f64 {
        return if (x > 0) x else std.math.exp(x);
    }
    /// Bound output signal to tanh
    /// @param {f64} x signal
    /// @returns {f64} hyperbolictan ( signal )
    pub fn tanh(x: f64) f64 {
        return std.math.tanh(x);
    }

    // pub fn tanh(x: anytype) @TypeOf(x) {
    // const T = @TypeOf(x);
    // return switch (T) {
    //     f32 => tanh32(x),
    //     f64 => tanh64(x),
    //     else => @compileError("tanh not implemented for " ++ @typeName(T)),
    // };
    // }
};
