# 只在componentDidMount内部创建事件监听器及定时器，在
# componentWillUnmount内清除两者。
# 这两生命周期方法不会再服务端被调用

#服务端渲染慎重考虑组件state传递客户端


# Spectacle Boilerplate

## Reference

#http://www.sis001.de/forum/viewthread.php?tid=9693783&extra=page%3D1%26amp%3Bfilter%3D0%26amp%3Borderby%3Ddateline%26amp%3Bascdesc%3DDESC

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Development

After downloading the boilerplate, your first order of business is to open terminal and run `npm install`

Next, run `rm -R .git` to remove the existing version control.

Then, to start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`
