import bus from "../utils/bus";

export default {
  // 재사용할 컴포넌트 옵션
  mounted() {
    bus.$emit("end:spinner");
  },
  // created() {
  //   bus.$emit("start:spinner");
  //   this.$store
  //     .dispatch("FETCH_LIST", this.$route.name)
  //     .then(() => {
  //       bus.$emit("end:spinner");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
};
