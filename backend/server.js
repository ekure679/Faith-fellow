const app = express();
app.use(express.json());
app.use(cors());
// Serve frontend files
app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});