import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Github({ className = "w-4 h-4" }) {
  return <FaGithub className={className} />;
}

export function Linkedin({ className = "w-4 h-4" }) {
  return <FaLinkedin className={className} />;
}
