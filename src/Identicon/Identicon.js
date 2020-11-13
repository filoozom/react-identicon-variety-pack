import React, { useRef } from 'react';
import useRenderIcon from './useRenderIcon'
import renderBlockie from './renderers/blockies'
import renderBishop from './renderers/bishop'
import renderDiscs from './renderers/discs'
import renderRings from './renderers/rings'
import renderNetwork from './renderers/network'
import renderNetworkLarge from './renderers/network-large'

export default function Identicon ({ renderIcon, seed, size, gridSize, scale, circle, className, style = {} }) {
  const canvasRef = useRef(null)
  useRenderIcon(renderIcon, { seed, size, gridSize, scale }, canvasRef)

  const canvasStyle = circle ? { ...style, borderRadius: '50%'} : style

  return <canvas className={className} style={canvasStyle} ref={canvasRef} width={1} height={1} />
}

export function Blockie (props) {
  return <Identicon {...props} renderIcon={renderBlockie} />
}

export function Bishop (props) {
  return <Identicon {...props} renderIcon={renderBishop} />
}

export function Discs (props) {
  return <Identicon {...props} renderIcon={renderDiscs} />
}

export function Rings (props) {
  return <Identicon {...props} renderIcon={renderRings} />
}

export function Network (props) {
  return <Identicon {...props} renderIcon={renderNetwork} />
}

export function NetworkLarge (props) {
  return <Identicon {...props} renderIcon={renderNetworkLarge} />
}

