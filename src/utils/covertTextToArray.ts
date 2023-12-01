const convertTextArray = (baseText: string) => {
  return [
    ...Array.from({ length: baseText.length + 1 }, (_, i) => baseText.slice(0, i)),
    ...Array.from({ length: baseText.length + 1 }, (_, i) => baseText.slice(0, i)).reverse(),
  ];
};

export default convertTextArray;
