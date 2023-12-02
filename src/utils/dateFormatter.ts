const dateFormatter = (date: string) => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  return year + '년 ' + month + '월 ' + day + '일';
};

export default dateFormatter;
