import { useState } from 'react';
import Image from 'next/image'
import { Box } from '@mui/material';

interface SelectProps {
  menuItems?: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Select({ menuItems, value, setValue }: SelectProps) {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ position: 'relative', height: '32px', backgroundColor: '#F9F9FA', borderRadius: '6px' }}>
      <Box 
        onClick={() => setOpen(!open)}
        sx={{ display: 'flex', alignItems: 'center', height: '100%', marginLeft: '8px', marginRight: '8px', cursor: 'pointer' }} 
      >
        <Box sx={{ fontFamily: 'Roboto', fontSize: '10px', lineHeight: '16px', fontWeight: 700, color: '#869DBC', zIndex: 2 }}>
          {value} 
        </Box>
        <Box sx={{ width: '16px', height: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src='img/selectArrow.svg' alt='arrow' width={6} height={3.33}/>
        </Box>
      </Box>
        {open && menuItems && 
        <>
          <Box sx={{ borderRadius: '6px', position: 'absolute', minWidth: '100%', paddingTop: '6px', paddingBottom: '6px', backgroundColor: '#fff', boxShadow: '0px 100px 80px 0px #00000012, 0px 40px 33px 0px #0000000D, 0px 22px 18px 0px #0000000A, 0px 12px 10px 0px #00000308, 0px 7px 6px 0px #00000008, 0px 3px 3px 0px #00000005, 0px -1px 12px 0px #00000008', zIndex: 2 }}>
            {menuItems.map(((el,index) => (
              <Box 
                onClick={() => {
                  setValue(el);
                  setOpen(false);
                }}
                key={index}
                sx={{ fontFamily: 'Roboto', color: '#869DBC', fontSize: '10px', lineHeight: '16px', fontWeight: 500, marginLeft: '8px', marginRight: '8px', paddingTop: '8px', paddingBottom: '8px', cursor: 'pointer' }}
              >
                {el}
              </Box>
            )))}
          </Box>
          <Box 
            onClick={() => setOpen(false)}
            sx={{ position: 'fixed', top: '0px', left: '0px', width: '100%', height: '100%', zIndex: 1 }} 
          />
        </>
      }
    </Box>
  );
}