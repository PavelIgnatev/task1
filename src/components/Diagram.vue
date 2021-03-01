<template>
  <div class="Diagram">
    <svg></svg>
    <Category
      v-for="(category, index) in data.categories"
      :title="category.title"
      :theme="theme"
      :valueText="category.valueText"
      :differenceText="category.differenceText"
      :key="index"
      :index="index"
    ></Category>
  </div>
</template>
<script>
import Category from "./rendering/category";
export default {
  name: "Diagram",
  props: ["data", "theme"],
  data() {
    return {
      min: Infinity,
      max: -Infinity,
    };
  },
  components: { Category },
  mounted() {
    Object.keys(this.data.categories).map((item) =>
      this.data.categories[item].valueText.split(" ")[0] > this.max
        ? (this.max = this.data.categories[item].valueText.split(" ")[0])
        : ""
    );
    Object.keys(this.data.categories).map((item) =>
      this.data.categories[item].valueText.split(" ")[0] < this.min
        ? (this.min = this.data.categories[item].valueText.split(" ")[0])
        : ""
    ),
    this.svg()
  },
  methods: {
    svg() {
      let data = [32, 30, 62, 58];
      let r = 120;

      let canvas = d3
        .select("svg")
        .attr("width", 240)
        .attr("height", 240)
        .style("transform", "rotate(90deg)");
      let group = canvas.append("g").attr("transform", "translate(120, 120)");

      let color_white = d3.scale
        .ordinal()
        .range([
          "radial-gradient1",
          "radial-gradient2",
          "radial-gradient3",
          "radial-gradient4",
        ]);

      let color_black = d3.scale
        .ordinal()
        .range([
          "radial-gradient5",
          "radial-gradient6",
          "radial-gradient7",
          "radial-gradient8",
        ]);
      let defs = group.append("defs");
      
      

      let radialGradient1 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient1");
      radialGradient1
        .append("stop")
        .attr("offset", "0")
        .attr("stop-color", "rgba(255, 184, 0, 0.56) ");
      radialGradient1
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(255, 239, 153, 0.32) ");

      let radialGradient2 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient2");
      radialGradient2
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgba(255, 184, 0, 0.24)");
      radialGradient2
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(255, 239, 153, 0.12)");

      let radialGradient3 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient3");
      radialGradient3
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgba(191, 191, 191, 0.345)");
      radialGradient3
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(228, 228, 228, 0.1)");

      let radialGradient4 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient4");
      radialGradient4
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgba(166, 166, 166, 0.1725)");
      radialGradient4
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(203, 203, 203, 0.05)");

      let radialGradient5 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient5")
        .attr("cx", "57%")
      radialGradient5
        .append("stop")
        .attr("offset", "0")
        .attr("stop-color", "rgba(255, 163, 0, 1)")
      radialGradient5
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(91, 58, 0, 1)");

      let radialGradient6 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient6")
        .attr("cy", "50%")
      radialGradient6
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgb(55,38,8)");
      radialGradient6
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(91, 58, 0, 1)");

      let radialGradient7 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient7");
      radialGradient7
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgba(155, 155, 155, 0.9) ");
      radialGradient7
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(56, 41, 0, 0.5)");

      let radialGradient8 = defs
        .append("radialGradient")
        .attr("id", "radial-gradient8");
      radialGradient8
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "rgba(77, 77, 77, 0.5) ");
      radialGradient8
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "rgba(56, 41, 0, 0.5) ");

      let arc = d3.svg
        .arc()
        .innerRadius(83)
        .outerRadius(r)
        .padAngle(0.02)
        .cornerRadius(8);
      let pie = d3.layout.pie().value(function(d) {
        return d;
      });

      let arcs = group
        .selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");

      arcs
        .append("path")
        .attr("d", arc)
        .attr("fill", function(d) {
          return `url(#${color_black(d.data)})`;
        });
    },
  },
};
</script>
<style lang="sass"></style>
