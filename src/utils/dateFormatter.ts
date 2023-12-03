const dateFormatter = (date: string, format: '년월일' | '년-월-일') => {
  const currentDate = new Date(date);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  if (format === '년월일') {
    return `${year}년 ${month}월 ${day}일`;
  } else if (format === '년-월-일') {
    return `${year}-${month}-${day}`;
  } else return `${year}.${month}.${day}`;
};

export default dateFormatter;
