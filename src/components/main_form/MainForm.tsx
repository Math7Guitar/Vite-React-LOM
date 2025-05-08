import { DefaultInput } from '../default_input';
import { Cycles } from '../cycles';
import { DefaultButton } from '../default_button';
import { PlayCircleIcon } from 'lucide-react';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state, setState }: HomeProps) {

  function handleClick() {
    setState(prevState => {
      return {
        ...prevState,
        config: {
          ...prevState.config,
          workTime: 34,
        },
        formattedSecondsRemaining: '23:34',
      };
    });
  }

  return (
    <form className='form' action=''>

      <div className='formRow'>
        <DefaultInput type='text' id='myInput' labelText='Task: ' title='task' required placeholder='Digite o Nome' />
      </div>

      <div className='formRow'>
        <p>Próximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={ <PlayCircleIcon /> }/>
      </div>

    </form>
  );
}
