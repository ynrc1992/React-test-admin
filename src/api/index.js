import ajax from './ajax';

//第一种：不知道传入的参数，不推荐使用
//第二种：参数多的时候用，
//第三种：参数只有两个用第二种

// export const reqLogin = (data) => ajax('/login', data, 'POST');
// export const reqLogin = ({username, password}) => ajax('/login', {username, password}, 'POST');
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST');