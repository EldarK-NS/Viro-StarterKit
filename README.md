# Viro Starter Kit

This is a blank React Native project setup with Viro.

## Installation

1. `git clone https://github.com/ViroCommunity/starter-kit.git`
2. `cd starter-kit`
3. `npm install`
4. `npx pod-install` (iOS)
5. `npx react-native run-android` or `npx react-native run-ios`

NOTE: The variant arguments are not needed for debug or release.

## How to Install Viro in an existing project?

If you are integrating ViroReact into an existing project, have a look at our [Installation instructions](https://github.com/ViroCommunity/viro/blob/main/readmes/INSTALL.md). Please note that this does _not_ work with Expo Managed Workflows. Sorry!

# Need help?

[Reach us in Discord.](https://discord.gg/YfxDBGTxvG)

     {/* front */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['aisha_bibi']}
          position={[0, -0.5, -2.5]}
          scale={[0.004, 0.004, 0.004]}
          type="OBJ"
          animation={{
            name: 'rotate',
            run: true,
            loop: true,
          }}
          visible={isVisible}
          onLoadEnd={finalRender}
          // rotation={[0, 90, 0]}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[0, -1.2, -2.5]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          // rotation={[0, 90, 0]}
        />
        <ViroText
          text={'ГЛАВНАЯ МОНЕТА'}
          scale={[1, 1, 1]}
          position={[0, -1.7, -2.5]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
        />
      </ViroNode> */}
      {/* front-right
      <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['aisha_bibi']}
          position={[2.3, -0.4, -1.5]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{
            name: 'rotate',
            run: true,
            loop: true,
          }}
          visible={isVisible}
          onLoadEnd={finalRender}
          // rotation={[0, 90, 0]}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[2.3, -1.1, -1.5]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, -45, 0]}
        />
        <ViroText
          text={'МОНЕТА - 2'}
          scale={[1, 1, 1]}
          position={[2.3, -1.6, -1.5]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, -45, 0]}
        />
      </ViroNode>
      {/*! right */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['anniversary']}
          position={[2.7, -0.3, 0.6]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{name: 'rotate', run: true, loop: true}}
          visible={isVisible}
          onLoadEnd={finalRender}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[2.7, -1, 0.6]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, -90, 0]}
        />
        <ViroText
          text={'МОНЕТА - 3'}
          scale={[1, 1, 1]}
          position={[2.7, -1.5, 0.6]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, -90, 0]}
        />
      </ViroNode> */}
      {/*! right-back */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['anniversary']}
          position={[2.3, -0.3, 2.5]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{name: 'rotate', run: true, loop: true}}
          visible={isVisible}
          onLoadEnd={finalRender}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[2.3, -1, 2.5]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, -135, 0]}
        />
        <ViroText
          text={'МОНЕТА - 4'}
          scale={[1, 1, 1]}
          position={[2.3, -1.5, 2.5]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, -135, 0]}
        />
      </ViroNode> */}
      {/* front-left */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['apple']}
          position={[-2.2, -0.7, -1.5]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{name: 'rotate', run: true, loop: true}}
          visible={isVisible}
          onLoadEnd={finalRender}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[-2.2, -1.4, -1.5]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, 45, 0]}
        />
        <ViroText
          text={'МОНЕТА - 8'}
          scale={[1, 1, 1]}
          position={[-2.2, -2.1, -1.5]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, 45, 0]}
        />
      </ViroNode> */}
      {/* left */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['apple']}
          position={[-2.7, -0.5, 0.4]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{name: 'rotate', run: true, loop: true}}
          visible={isVisible}
          onLoadEnd={finalRender}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[-2.7, -1.2, 0.4]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, 90, 0]}
        />
        <ViroText
          text={'МОНЕТА - 7'}
          scale={[1, 1, 1]}
          position={[-2.7, -1.7, 0.4]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, 90, 0]}
        />
      </ViroNode> */}
      {/* left-back */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['apple']}
          position={[-2.2, -0.5, 2.5]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{name: 'rotate', run: true, loop: true}}
          visible={isVisible}
          onLoadEnd={finalRender}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[-2.2, -1.2, 2.5]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, 135, 0]}
        />
        <ViroText
          text={'МОНЕТА - 6'}
          scale={[1, 1, 1]}
          position={[-2.2, -1.7, 2.5]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, 135, 0]}
        />
      </ViroNode> */}
      {/* back */}
      {/* <ViroNode>
        <Viro3DObject
          source={require('./res/AR_Coins/30th_ANNIVERSARY/30th_anniversary.obj')}
          materials={['uki']}
          position={[0, -0.2, 3]}
          scale={[0.003, 0.003, 0.003]}
          type="OBJ"
          animation={{name: 'rotate', run: true, loop: true}}
          visible={isVisible}
          onLoadEnd={finalRender}
        />
        <Viro3DObject
          source={require('./res/Box/small_box_uv.obj')}
          materials={['box']}
          position={[0, -0.9, 3]}
          scale={[0.11, 0.11, 0.11]}
          type="OBJ"
          rotation={[0, -180, 0]}
        />
        <ViroText
          text={'МОНЕТА - 5'}
          scale={[1, 1, 1]}
          position={[0, -1.4, 3]}
          style={styles.helloWorldTextStyle}
          width={30}
          height={5}
          rotation={[0, -180, 0]}
        />
      </ViroNode> */}


       // ViroMaterials.createMaterials({

// apple: {
// lightingModel: 'PBR',
// normalTexture: require('./res/AR_Coins/HOMELAND_OF_APPLES/Normal.jpg'),
// diffuseTexture: require('./res/AR_Coins/HOMELAND_OF_APPLES/BaseColor.jpg'),
// roughness: 0.0,
// metalness: 1,
// },
// });
// ViroMaterials.createMaterials({
// anniversary: {
// lightingModel: 'PBR',
// normalTexture: require('./res/AR_Coins/30th_ANNIVERSARY/Normal.jpg'),
// diffuseTexture: require('./res/AR_Coins/30th_ANNIVERSARY/BaseColor.jpg'),
// roughness: 0.0,
// metalness: 1,
// },
// });
// ViroMaterials.createMaterials({
// uki: {
// lightingModel: 'PBR',
// normalTexture: require('./res/AR_Coins/Uki/Normal.jpg'),
// diffuseTexture: require('./res/AR_Coins/Uki/BaseColor.jpg'),
// roughness: 0.0,
// metalness: 1,
// },
// });
// ViroMaterials.createMaterials({
// box: {
// lightingModel: 'PBR',
// normalTexture: require('./res/Box/box_default_Normal.jpg'),
// diffuseTexture: require('./res/Box/box_default_BaseColor.jpg'),
// roughnessTexture: require('./res/Box/box_default_Roughness.jpg'),
// // roughness: 0.0,
// metalness: 1,
// },
// });
