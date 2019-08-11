export const delay = async (delayMs: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, delayMs);
  });
};
