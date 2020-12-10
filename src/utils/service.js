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
      return d.getFullYear() + '-' + padWithZero(d.getMonth()+1)+'-' + padWithZero(d.getDate()) + 'T' + padWithZero(d.getHours()) + ':' + padWithZero(d.getMinutes())
  }

  static getLocalDateTime(date) {
    let d = new Date(date);
    let offset = d.getTimezoneOffset();
    d.setTime( d.getTime() + offset );

    const padWithZero = number => {
      const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
      return string;
    };
    return d.getFullYear() + '-' + padWithZero(d.getMonth()+1)+'-' + padWithZero(d.getDate()) + ' ' + padWithZero(d.getHours()) + ':' + padWithZero(d.getMinutes())
}

  static getOnlineColor(status) {
    let color = 'green';
    if (status === 'away') { color = 'grey'}
    if (status === 'offline') { color = 'red'}
    return color;
  }

  static getStatusColor(status) {
    let color = 'blue';
    if (status === 'LIVE') { color = '#2ac940'}
    if (status === 'PAUSED') { color = 'orange'}
    if (status === 'STOPPED') { color = 'yellow'}
    if (status === 'ENDED') { color = 'brown'}
    if (status === 'COMPLETED') { color = 'red'}

    return color;
  }

  static padWithZero(number) {
    const string = number.toString();
      if (number < 10) {
        return "0" + string;
      }
    return string;
  }

  static timerDay(seconds) {
    let result = Math.floor(seconds / 86400);
    return result
  }

}

export default UtilService