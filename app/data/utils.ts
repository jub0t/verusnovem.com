export const chunkArray = <T>(arr: T[], size: number): T[][] => {
    const result: T[][] = Array.from({ length: size }, () => []); // Initialize an array with "size" empty arrays
    arr.forEach((item, index) => {
        result[index % size].push(item); // Distribute items in a round-robin manner
    });
    return result;
};
