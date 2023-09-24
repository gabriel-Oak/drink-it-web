export default function debounce(func: Function, timeout = 300): Function {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func(...args); }, timeout);
  };
}