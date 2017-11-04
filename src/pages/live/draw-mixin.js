/*
 * 绘制round 操作
 * @author: chenzhou
 * @update: 2017.11.04
 * @desc
 *
 */


var drawMixin = {
  methods: {
    /*
     * @method 画弧线
     * @param
     */
    drawPie(arr, svg) {
      let self = this;
      // 1.算比例
      var sum = arr[1];

      // 如果班级一个人都没有，则不画饼图
      if (sum == 0) return;

      var aScale = [];
      for (var i = 0; i < arr.length; i++) {
        aScale[i] = arr[i] / sum;
      }

      // 2.算角度
      var aAngle = [];
      for (var i = 0; i < arr.length; i++) {
        aAngle[i] = 270 * aScale[i];
      }

      // var svg = document.querySelector('.J_round svg');

      var r = 33;
      var centX = 150,
        centY = 75;

      var path = self.createSVG('path');
      path.setAttribute("d", this.describeArc(centX, centY, r, 225, 225 + aAngle[0]));
      path.setAttribute("style", "fill:#F3F3F3;stroke:#000000;stroke-width:5");
      svg.appendChild(path);

      var path3 = self.createSVG('path');
      path3.setAttribute("d", this.describeArc(centX, centY, r, 225 + aAngle[0], 225 + aAngle[1]));
      path3.setAttribute("style", "fill:#F3F3F3;stroke:#AB9485;stroke-width:5");
      svg.appendChild(path3);
    },
    // 创建svg元素
    createSVG(tag) {
      return document.createElementNS('http://www.w3.org/2000/svg', tag);
    },
    describeArc(x, y, radius, startAngle, endAngle) {
      var start = this.polarToCartesian(x, y, radius, endAngle);
      var end = this.polarToCartesian(x, y, radius, startAngle);

      var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

      var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y
      ].join(" ");

      return d;
    },
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    }
  }
}


export default drawMixin;
