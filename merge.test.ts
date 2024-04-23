import { merge } from "./merge";

describe("merge", () => {
  it("normal", () => {
    expect(merge([1, 3, 5], [8, 6, 4], [2, 7, 9])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("collection_1 is empty", () => {
    expect(merge([], [5, 4, 3], [1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  it("collection_2 is empty", () => {
    expect(merge([1, 2, 3], [], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("collection_3 is empty", () => {
    expect(merge([1, 2, 3], [6, 5], [])).toEqual([1, 2, 3, 5, 6]);
  });

  test('collection duplicates element', () => {
    const collection1 = [1, 4, 7, 10];
    const collection2 = [10, 7, 4, 1];
    const collection3 = [1, 4, 7, 10];
    const expected = [1, 1, 1, 4, 4, 4, 7, 7, 7, 10, 10, 10];
    const result = merge(collection1, collection2, collection3);
    expect(result).toEqual(expected);
  });
});
