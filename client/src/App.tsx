import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import CaseEcommerce from "@/pages/case-ecommerce";
import CaseClinica from "@/pages/case-clinica";
import CaseSaas from "@/pages/case-saas";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case/ecommerce" component={CaseEcommerce} />
      <Route path="/case/clinica" component={CaseClinica} />
      <Route path="/case/saas" component={CaseSaas} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
