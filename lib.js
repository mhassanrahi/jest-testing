module.exports = {
    absolute: (number) => {
        if (number > 0) return number;
        if (number < 0) return -number;
        return 0;
    },

    sum: (a, b) => {
        return a + b;
      }
}