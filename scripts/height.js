var lineChartData = {
    labels: ["0h", "6h", "12h", "18h", "24h", "30h", "36h", "42h", "48h", "54h", "60h", "66h", "72h"],
    datasets: [{
        fillColor: "green",
        strokeColor: "#ffffff",
        pointColor: "#ffffff",
        data: [0, 10000, 45000, 80000, 115000, 150000, 185000, 220000, 245000, 280000, 315000, 350000, 384000]
    }, ]

}

Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "white";
Chart.defaults.global.scaleFontSize = 14;

var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 4,
    bezierCurve: false,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "#404040"
});
