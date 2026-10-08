import { Stack, ThemeProvider, useTheme } from "expo-router";

export default function RootLayout() {
  const theme = useTheme()
  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
      </Stack>
    </ThemeProvider>
  );
}
