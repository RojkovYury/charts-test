import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { InfoOutlined, SettingsOutlined } from '@mui/icons-material';

interface TitleH1Props {
  text: string;
}

export default function TitleH1({ text }: TitleH1Props) {
  return (
    <Box sx={{ display: 'flex', marginBottom: '8px', marginLeft: '16px', marginRight: '16px', marginTop: '16px', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex' }}>
        <Typography component="h1" sx={{ fontSize: '32px', lineHeight: '37.5px', fontWeight: 900 }}>
          Customer lifetime value
        </Typography>
        <IconButton sx={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <InfoOutlined sx={{ fontSize: '16px', fill: '#5E7594' }}/>
        </IconButton>
      </Box>
      <IconButton sx={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <SettingsOutlined sx={{ fontSize: '16px', fill: '#869DBC' }}/>
      </IconButton>
    </Box>
  );
}