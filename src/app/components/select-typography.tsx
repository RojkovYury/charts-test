import Typography from '@mui/material/Typography';

interface SelectTypographyProps {
  text: string;
}

export default function SelectTypography({ text }: SelectTypographyProps) {
  return (
    <Typography 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        fontSize: '10px', 
        lineHeight: '16px', 
        fontWeight: 700, 
        color: '#90A7C6', 
        marginLeft: '8px', 
        marginRight: '8px' 
      }}
    >
      {text}
    </Typography>
  );
}