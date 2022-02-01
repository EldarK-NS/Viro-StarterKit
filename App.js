/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroOmniLight,
  ViroLightingEnvironment,
  ViroNode,
  // Viro360Image,
  // ViroSphere,
} from '@viro-community/react-viro';
import {coinsArr} from './assets/images/Data';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const [isVisible, setIsVisible] = useState(false);

  const [coinsData, setCoinsData] = useState(coinsArr);

  function onInitialized(state, reason) {
    // console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setIsVisible(true);
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }

  ViroAnimations.registerAnimations({
    rotate: {
      properties: {
        // rotateX: '+=10',
        rotateY: '+=90',
      },
      duration: 2000, //.25 seconds
    },
  });
  ViroMaterials.createMaterials({
    aisha: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/aisha/Normal.jpg'),
      diffuseTexture: require('./res/coins/aisha/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    apple: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/apple/Normal.jpg'),
      diffuseTexture: require('./res/coins/apple/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    anniversary: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/anniversary/Normal.jpg'),
      diffuseTexture: require('./res/coins/anniversary/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    uki: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/uki/Normal.jpg'),
      diffuseTexture: require('./res/coins/uki/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    aqqy: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/aqqy/Normal.jpg'),
      diffuseTexture: require('./res/coins/aqqy/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    kokbori: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/kokbori/Normal.jpg'),
      diffuseTexture: require('./res/coins/kokbori/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    narkobyz: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/narkobyz/Normal.jpg'),
      diffuseTexture: require('./res/coins/narkobyz/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    tamgalytas: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/tamgalytas/Normal.jpg'),
      diffuseTexture: require('./res/coins/tamgalytas/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    tulipa: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/tulipa/Normal.jpg'),
      diffuseTexture: require('./res/coins/tulipa/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    yurt: {
      lightingModel: 'PBR',
      normalTexture: require('./res/coins/yurt/Normal.jpg'),
      diffuseTexture: require('./res/coins/yurt/BaseColor.jpg'),
      roughness: 0.0,
      metalness: 1,
    },
    box: {
      lightingModel: 'PBR',
      normalTexture: require('./res/Box/box_default_Normal.jpg'),
      diffuseTexture: require('./res/Box/box_default_BaseColor.jpg'),
      roughnessTexture: require('./res/Box/box_default_Roughness.jpg'),
      // roughness: 0.0,
      metalness: 1,
    },
  });

  const finalRender = () => {
    setIsVisible(true);
  };
  const handlePress = () => {
    const newData = coinsData;
    newData.push(newData.shift());
    setCoinsData(newData);
    console.log(coinsData);
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroLightingEnvironment source={require('./res/objects/07.hdr')} />
      <ViroOmniLight
        intensity={2000}
        position={[-1, 3, 0.5]}
        color={'#FFFFFF'}
        attenuationStartDistance={10}
        attenuationEndDistance={20}
      />
      {coinsData.map(item => {
        return (
          <ViroNode key={item.id}>
            <Viro3DObject
              source={require('./res/objects/main_obj.obj')}
              materials={[item.coin.materials]}
              position={item.coin.position}
              scale={[0.006, 0.006, 0.006]}
              type="OBJ"
              animation={{
                name: 'rotate',
                run: true,
                loop: true,
              }}
              visible={isVisible}
              // onLoadEnd={finalRender}
              rotation={item.coin.rotation}
            />
            <Viro3DObject
              source={require('./res/objects/box_obj.obj')}
              materials={['box']}
              position={item.box.position}
              scale={[0.15, 0.15, 0.15]}
              type="OBJ"
              rotation={item.box.rotation}
            />
            <ViroText
              text={item.text.text}
              scale={[1, 1, 1]}
              position={item.text.position}
              style={styles.helloWorldTextStyle}
              width={30}
              height={5}
              rotation={item.text.rotation}
            />
          </ViroNode>
        );
      })}
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '900',
    color: '#FFD12A',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  image: {width: 20, height: 20, resizeMode: 'cover'},
});
