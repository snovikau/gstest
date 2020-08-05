import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { MusicDatabasePage } from 'pages/MusicDatabase';
import { theme } from 'theme/theme';
import GlobalStyles from 'theme/globalStyles';

const App: FC = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <MusicDatabasePage />
    </ThemeProvider>
  </>
);

export default App;
