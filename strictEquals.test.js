function strictEquals(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) return false;
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }
  return Object.is(a, b);
}

describe("Given the function strictEquals", () => {
  describe("When 1 and 1 are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = 1;
      const b = 1;
      const expextedResult = true;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When NaN and NaN are compared", () => {
    test("Then the result should be false", () => {
      // Arrange
      const a = NaN;
      const b = NaN;
      const expextedResult = false;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When 0 and -0 are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = 0;
      const b = -0;
      const expextedResult = true;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When -0 and 0 are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = -0;
      const b = 0;
      const expextedResult = true;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When 1 and '1' are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = 1;
      const b = "1";
      const expextedResult = false;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When true and false are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = true;
      const b = false;
      const expextedResult = false;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When false and false are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = false;
      const b = false;
      const expextedResult = true;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });

  describe("When string Water and oil are compared", () => {
    test("Then the result should be true", () => {
      // Arrange
      const a = "Water";
      const b = "oil";
      const expextedResult = false;

      // Act
      const result = strictEquals(a, b);

      // Assert
      expect(result).toBe(expextedResult);
    });
  });
});
