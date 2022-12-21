<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core';
	import { ContactShadows } from '@threlte/extras';
	import Shoe from '../components/Shoe.svelte';

	import { degToRad } from 'three/src/math/MathUtils';
	import Picker from '../components/Picker.svelte';
	let innerWidth: number | null | undefined;
	let fov = 50;
	let distance = 4;
	let floorRadius = 2;

	$: if (innerWidth) {
		if (innerWidth < 500) {
			fov = 80;
			distance = 5;
			floorRadius = 1;
		} else {
			fov = 50;
			distance = 4;
			floorRadius = 2;
		}
	}
</script>

<svelte:window bind:innerWidth />
<div class="w-screen h-screen font-sans">
	<Picker />
	<Canvas shadows>
		<T.PerspectiveCamera makeDefault position={[0, -2, distance]} {fov}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={false} />
		</T.PerspectiveCamera>

		<T.SpotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
		<T.AmbientLight intensity={0.7} />

		<ContactShadows
			position={{ y: 0.8, x: 0, z: 0 }}
			opacity={0.25}
			scale={10}
			blur={1.5}
			far={0.8}
		/>
		<Shoe />

		<!-- Floor -->
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[floorRadius, 100]} />
			<T.MeshStandardMaterial color={'#696969'} />
		</T.Mesh>
	</Canvas>
</div>
