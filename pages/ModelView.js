import Script from "next/script";
import { View } from "react-native";
export default function ModelView({ navigation }) {
  return (
    <View w={"100%"}>
      <model-viewer
        style={{ height: "500px", width: "100%" }}
        alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
        src="/3DModels/toyota_gt.glb"
        ar
        ar-modes="scene-viewer webxr quick-look"
        camera-controls
        auto-rotate
        poster="poster.webp"
        shadow-intensity="1"
        exposure="1"
        environment-image="/3DModels/spruit_sunrise_1k_HDR.hdr"
      ></model-viewer>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"
      />
    </View>
  );
}
