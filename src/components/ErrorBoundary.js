import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { Refresh as RefreshIcon, Home as HomeIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to console
    console.error("Error caught by boundary:", error, errorInfo);

    // Update state with error details
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

// Error fallback component
const ErrorFallback = ({ error }) => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" color="error" gutterBottom>
          Oops! Something went wrong
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          We encountered an unexpected error. Please try refreshing the page or
          go back to the dashboard.
        </Typography>

        {process.env.NODE_ENV === "development" && error && (
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "grey.100",
              borderRadius: 1,
              textAlign: "left",
              fontFamily: "monospace",
              fontSize: "0.875rem",
            }}
          >
            <Typography variant="body2" color="error">
              {error.toString()}
            </Typography>
          </Box>
        )}

        <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={handleRefresh}
          >
            Refresh Page
          </Button>

          <Button
            variant="outlined"
            startIcon={<HomeIcon />}
            onClick={handleGoHome}
          >
            Go to Dashboard
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ErrorBoundary;
