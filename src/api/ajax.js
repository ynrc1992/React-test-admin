import axios from 'axios';
import { message } from 'antd';

export default function ajax(url, data = {}, method = 'GET') {
    let reqParams = data;
    method = method.toLowerCase();

    if (method === 'GET') {
        reqParams = {
            params: data
        }
    }

    return axios[method](url, reqParams)
        .then((res) => {
            const { data } = res;
            // console.log(data);
             /*if (data.status === 0) {
                //请求成功跳转到主页面
                /!*<Redirect to="/"> 推荐在render中使用*!/
                // this.props.history.replace("/"); 推荐在回调函数中使用
                this.props.history.replace("/");
                return Promise.reject()
            }else {
                //错误提示以及提示存在时间
                message.error(data.msg, 2)
            }*/
            // return data;
            if (data.status === 0) {
                /*//请求成功跳转到主页面
                /!*<Redirect to="/"> 推荐在render中使用*!/
                // this.props.history.replace("/"); 推荐在回调函数中使用
                this.props.history.replace("/");*/
                return data.data;
            }else {
                //错误提示以及提示存在时间
                message.error(data.msg, 2);
            }
        })
        .catch((err) => {
            message.error('网络异常，请刷新重新尝试', 2);
        })
}