import { CUSTOM_ELEMENTS_SCHEMA, Component, viewChild, ElementRef, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { injectStore, extend, NgtArgs, injectBeforeRender, injectLoader } from 'angular-three';
import { OrbitControls } from 'three-stdlib';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh, BoxGeometry, MeshBasicMaterial, Color } from 'three';
import { ConfigService } from '../angular-three3d/services/config.service';
import * as THREE from 'three';

extend(THREE);
extend({ OrbitControls });

@Component({
  standalone: true,
  imports: [NgtArgs],
  template: `
    <!-- <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-basic-material color="hotpink" />
    </ngt-mesh> -->

    <ngt-ambient-light [intensity]="2"/>
    <ngt-directional-light [intensity]="5" [position]="[0, 0, 1]"/>
    <ngt-directional-light [intensity]="5" [position]="[0, 0, -1]"/>
    <!-- <ngt-point-light [intensity]="0.5" [position]="[1, 1, 0]"/>
    <ngt-point-light [intensity]="0.5" [position]="[-0.5, -0.5, 0]"/> -->
    <ngt-primitive *args="[model()]" [position]="[0, -0.7, -0.1]"/>
    <ngt-orbit-controls #orbitControls
      *args="[camera(), glDomElement()]"
      [enableZoom]="false"
      [autoRotate]="true"
      [autoRotateSpeed]="5"
    />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  // meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  // constructor() {

  //   // di chuyển
  //   injectBeforeRender(({ delta }) => {
  //     const mesh = this.meshRef().nativeElement;
  //     mesh.rotation.x += delta;
  //     mesh.rotation.y += delta;
  //   })
  // }

  configService = inject(ConfigService);
  ngtStore = injectStore();

  orbitControls = viewChild<ElementRef<OrbitControls>>('orbitControls');

  gltf = injectLoader(
    () => GLTFLoader,
    () => `assets/cup.gltf`
  );

  model = computed(() => {
    const gltf = this.gltf();

    if (!gltf)
      return null;

    const color = this.configService.selectedColor();
    

    const meshes: Mesh[] = [];
    gltf.scene.traverse((child) => {
      if (child instanceof Mesh) {
        meshes.push(child);
      }
    });
    //có 2 mesh
    // mesh đầu là màu bên ngoài
    // mesh 2 là màu bên trong

    const mesh = meshes[0];
    const material = mesh.material as MeshBasicMaterial;
    material.color.set(new Color(color));

    // // In ra các mesh
    // meshes.forEach((mesh, index) => {
    //   console.log(`Mesh ${index}:`, mesh);
    // });

    return gltf.scene;
  });

  camera = this.ngtStore.select('camera');
  glDomElement = this.ngtStore.select('gl', 'domElement');

  constructor() {
    injectBeforeRender(() => {
      const orbitControls = this.orbitControls()?.nativeElement;
      if (orbitControls) {
        orbitControls.update();
      }
    })
  }
}

