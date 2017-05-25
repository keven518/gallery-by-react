require('normalize.css/normalize.css');
require('styles/App.styl');

import React from 'react';

//获取图片数据，将图片名信息转成url路径
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function getImgUrl(imgDatasArr) {
  for (var i = 0, j = imgDatasArr.length; i < j; i++) {
    var oneimgData = imgDatasArr[i];
    oneimgData.imageURL = require('../images/' + oneimgData.fileName);
    imgDatasArr[i] = oneimgData; //这是引用，可以不要，谨慎起见
  }
  return imgDatasArr;
})(imageDatas);

class ImgFigure extends React.Component {
  render() {
    return (
      <figure className="img-figure">
      	<img src={this.props.data.imageURL}
      			 alt={this.props.data.title}
      	/>
      	<figcaption>
      		<h2>22</h2>
      	</figcaption>
      </figure>
      

    );
  }
}

class AppComponent extends React.Component {
  render() {
  	var controllerUnits = [],
  		ImgFigures = [];
		
		imageDatas.forEach(function (value) {
			ImgFigures.push(<ImgFigure data={value} />);
		});

    return (
      < section className = "stage">
        < section className = "img-sec" >{ImgFigures}</section>
        < nav className = "controller-nav" >{controllerUnits}</nav>
      </section>
      

    );
  }
}



AppComponent.defaultProps = {
};

export default AppComponent;
