import React from 'react';
import { ActivityIndicator } from 'react-native';

interface ILoaderProps {
  color?: string;
}

const Loader: React.FC<ILoaderProps> = ({ color = '#000' }) => (
  <ActivityIndicator color={color} />
);

export default Loader;
