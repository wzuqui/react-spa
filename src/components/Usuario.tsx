import { Pessoa } from './Pessoa';
import { Popover } from './Popover';

export function Usuario() {
  return (
    <Popover
      trigger={
        <Pessoa
          nome="Willian Luis Zuqui"
          empresa="Empresa"
          foto="https://github.com/wzuqui.png"
          style={{
            height: '40px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        />
      }
      surface={<div>aqui tem coisa</div>}
    ></Popover>
  );
}
