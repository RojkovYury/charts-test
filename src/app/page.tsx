'use client'

import { useState } from 'react';
import Box from '@mui/material/Box';
import TitleH1 from './components/title-h1';
import Select from './components/select';
import SelectTypography from './components/select-typography';
import ChartNDayRetention from './components/chart-nday-retention';

export default function Main() {

  const testCurrency = ['USD', 'RUB']
  const testSelect = ['CREDIT CAR NUMBER', 'DEBET CAR NUMBER' ];
  const testMonthsNumber = ['12', '9', '6']
  const testTrends = ['ЛИНЕЙНЫЙ', 'ОТСУТСТВУЕТ']
  const testTypeCalculation = ['ПРОГНОЗНЫЙ', 'ПРЯМОЙ']

  const [currency, setCurrency] = useState('USD');
  const [sourse, setSourse] = useState('CREDIT CAR NUMBER');
  const [monthsNumber, setMonthsNumber] = useState('12');
  const [trends, setTrends] = useState('ЛИНЕЙНЫЙ');
  const [typeCalculation, setTypeCalculation] = useState('ПРОГНОЗНЫЙ');

  return (
    <div style={{ position: 'relative', marginLeft: 'auto', marginRight: 'auto', width: '80%', marginTop: '150px', border: '1px solid black', borderRadius: '10px' }}>
      
      <TitleH1 text={'N-day retention'} />

      <Box sx={{ display: 'flex', marginBottom: '8px', marginLeft: '16px', marginRight: '16px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Select menuItems={testCurrency} value={currency} setValue={setCurrency} />
          <SelectTypography text={'BY SOURSE'} />
          <Select menuItems={testSelect} value={sourse} setValue={setSourse} />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <SelectTypography text={'ПОКАЗЫВАТЬ ПО'} />
          <Select menuItems={testMonthsNumber} value={monthsNumber} setValue={setMonthsNumber} />
          <SelectTypography text={'МЕСЯЦЕВ'} />
        </Box>
      </Box>

      <ChartNDayRetention />

      <Box sx={{ display: 'flex', marginBottom: '8px', marginLeft: '16px', marginRight: '16px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          main trends
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex' }}>
            <SelectTypography text={'НАЛИЧИЕ ТРЕНДА'} />
            <Select menuItems={testTrends} value={trends} setValue={setTrends} />
          </Box>
          <Box sx={{ display: 'flex' }}>
            <SelectTypography text={'ВИД РАСЧЕТА'} />
            <Select menuItems={testTypeCalculation} value={typeCalculation} setValue={setTypeCalculation} />
          </Box>
        </Box>
      </Box>

    </div>
  )
}
