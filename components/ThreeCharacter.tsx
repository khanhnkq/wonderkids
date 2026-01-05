import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const PlaceholderRobot = ({ speaking }: { speaking: boolean }) => {
    const group = useRef<THREE.Group>(null);
    const bodyMesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!group.current) return;

        // Idle animation: floating
        const t = state.clock.getElapsedTime();
        group.current.position.y = Math.sin(t * 1) * 0.1;

        // Speaking animation: bounce slightly
        if (speaking && bodyMesh.current) {
            bodyMesh.current.scale.y = 1 + Math.sin(t * 10) * 0.05;
            bodyMesh.current.scale.x = 1 - Math.sin(t * 10) * 0.02;
        } else if (bodyMesh.current) {
            bodyMesh.current.scale.setScalar(1);
        }
    });

    return (
        <group ref={group}>
            {/* Head */}
            <Sphere args={[0.6, 32, 32]} position={[0, 1.2, 0]}>
                <MeshDistortMaterial
                    color={speaking ? "#FFD700" : "#8B5CF6"} // Yellow when speaking, Purple otherwise
                    attach="material"
                    distort={0.3}
                    speed={2}
                    roughness={0.2}
                />
            </Sphere>

            {/* Eyes */}
            <Sphere args={[0.12, 16, 16]} position={[-0.2, 1.3, 0.45]}>
                <meshStandardMaterial color="black" />
            </Sphere>
            <Sphere args={[0.12, 16, 16]} position={[0.2, 1.3, 0.45]}>
                <meshStandardMaterial color="black" />
            </Sphere>

            {/* Body */}
            <Box ref={bodyMesh as any} args={[1, 1.2, 0.6]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#A78BFA" />
            </Box>

            {/* Arms */}
            <Box args={[0.25, 0.8, 0.25]} position={[-0.7, 0.2, 0]}>
                <meshStandardMaterial color="#8B5CF6" />
            </Box>
            <Box args={[0.25, 0.8, 0.25]} position={[0.7, 0.2, 0]}>
                <meshStandardMaterial color="#8B5CF6" />
            </Box>
        </group>
    );
};

interface ThreeCharacterProps {
    speaking: boolean;
}

const ThreeCharacter: React.FC<ThreeCharacterProps> = ({ speaking }) => {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <PlaceholderRobot speaking={speaking} />

                <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
            </Canvas>
        </div>
    );
};

export default ThreeCharacter;
