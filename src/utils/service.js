class UtilService {

  static getDateTime(date) {
      let d = new Date(date);
      const padWithZero = number => {
        const string = number.toString();
        if (number < 10) {
          return "0" + string;
        }
        return string;
      };
      return d.getFullYear() + '-' + padWithZero(d.getMonth()+1)+'-' + padWithZero(d.getDate()) + 'T' + d.getHours() + ':' + d.getMinutes()
  }

  static getOnlineColor(status) {
    let color = 'green';
    if (status === 'away') { color = 'grey'}
    if (status === 'offline') { color = 'red'}
    return color;
  }

}

export default UtilService