Utility Functions for Machine Learning
1. Normalization/Scaling Functions

    Min-Max Scaling: Normalize the data to a specific range (e.g., [0, 1]) using the following functions:
        minMaxScale(data: number[]): number[]: Apply min-max scaling to an array of numerical data.

    Z-Score Normalization: Scale the data to have zero mean and unit variance using the following function:
        zScoreNormalize(data: number[]): number[]: Apply z-score normalization to an array of numerical data.

2. Loss Functions

    Mean Squared Error (MSE): Calculate the mean squared error between predicted and target values using the following function:
        meanSquaredError(yTrue: number[], yPred: number[]): number: Calculate the mean squared error between two arrays of predicted and target values.

    Binary Cross-Entropy: Calculate the binary cross-entropy loss between predicted and target values using the following function:
        binaryCrossEntropy(yTrue: number[], yPred: number[]): number: Calculate the binary cross-entropy loss between two arrays of predicted and target values.

3. Evaluation Metrics

    Accuracy: Calculate the accuracy score between predicted and target labels using the following function:
        accuracy(yTrue: number[], yPred: number[]): number: Calculate the accuracy score between two arrays of predicted and target labels.

    Precision, Recall, F1-Score: Calculate precision, recall, and F1-score metrics using the following functions:
        precision(yTrue: number[], yPred: number[]): number: Calculate the precision score between two arrays of predicted and target labels.
        recall(yTrue: number[], yPred: number[]): number: Calculate the recall score between two arrays of predicted and target labels.
        f1Score(yTrue: number[], yPred: number[]): number: Calculate the F1-score between two arrays of predicted and target labels.

8. Optimization Algorithms

    Stochastic Gradient Descent (SGD): Implement stochastic gradient descent optimization algorithm using the following function:
        stochasticGradientDescent(loss: (params: number[]) => number, initialParams: number[], learningRate: number, numIterations: number): number[]: Perform stochastic gradient descent optimization given a loss function, initial parameters, learning rate, and number of iterations.
