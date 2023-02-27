import { faBackward, faDiagramNext, faLessThan, faLessThanEqual, faPlay, faPlus, faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from './Controles.module.css'
function Controls({media}) {
 
  function avancar(){
    media.currentTime +=15;
  }
  function diminuirVel(){
    media.playbackRate -= 0.1;
  }
  function aumentarVel(){
    media.playbackRate += 0.1;
  }
  function retroceder(){
    media.currentTime -=15;
  }
  function play(){
    media.play()
  }
  function stop(){
    media.pause()
    media.currentTime = 0;
  }
  return (
<div className={styles.controls}>
<FontAwesomeIcon icon={faBackward} onClick={retroceder} />
<FontAwesomeIcon icon={faPlay} />
<FontAwesomeIcon icon={faStop} />
<FontAwesomeIcon icon={faPlus}/>
<FontAwesomeIcon icon={faLessThanEqual} />
</div>
  )
}

export default Controls