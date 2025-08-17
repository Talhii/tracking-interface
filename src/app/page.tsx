"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Box,
  IconButton,
  Button,
  Card,
  CardMedia,
  Checkbox,
  Drawer,
  List,
  ListItem,
  Pagination,
} from "@mui/material";
import {
  Business,
  Person,
  NavigateNext,
  NavigateBefore,
} from "@mui/icons-material";

interface TrackingItem {
  id: number;
  tracking: string;
  received: string;
  weight: string;
  dimensions: string;
  description: string;
  repackOption: string;
  photos: string[];
}

const mockData: TrackingItem[] = [
  {
    id: 1,
    tracking: "xxxxxxxxxx 310326",
    received: "JUL-07-2025",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Standard",
    photos: [
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593642633279-1796119d5482?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 2,
    tracking: "xxxxxxxxxx 310326",
    received: "JUL-07-2025",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Express",
    photos: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 3,
    tracking: "xxxxxxxxxx 310326",
    received: "JUL-07-2025",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Standard",
    photos: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 4,
    tracking: "xxxxxxxxxx 310326",
    received: "JUL-07-2025",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Premium",
    photos: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    ],
  },
  {
    id: 5,
    tracking: "xxxxxxxxxx 310326",
    received: "JUL-07-2025",
    weight: "90.90",
    dimensions: "20 x 20 x 20",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    repackOption: "Standard",
    photos: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    ],
  },
];

export default function TrackingInterface() {
  const [selectedItem, setSelectedItem] = useState<TrackingItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([1, 2, 3]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePhotoClick = (item: TrackingItem) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const drawerWidth = 73;

  const sidebarItems = [
    { icon: "/images/sidebar1.png", active: false },
    { icon: "/images/sidebar2.png", active: false },
    { icon: "/images/sidebar3.png", active: false },
    { icon: "/images/sidebar4.png", active: false },
    { icon: "/images/sidebar5.png", active: true },
    { icon: "/images/sidebar6.png", active: false },
    { icon: "/images/sidebar7.png", active: false },
    { icon: "/images/sidebar8.png", active: false },
    { icon: "/images/sidebar9.png", active: false },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#F3F6F9",
      }}
    >
      {/* Top Header */}
      <Box
        sx={{
          height: 70,
          backgroundColor: "#F3F6F9",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #0057B8",
        }}
      >
        <Box
          sx={{
            width: 73,
            height: "100%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo with actual logo image */}
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundImage: 'url("/images/logo 2.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Box>

        {/* Header Content */}
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#F3F6F9",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: "#F3F6F9",
            }}
          >
            <Box
              sx={{
                width: 24,
                height: 24,
                backgroundImage: 'url("/images/sidebar5black.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Typography
              sx={{ color: "#333", fontSize: "16px", fontWeight: 500 }}
            >
              Shipments / Create New
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundImage: 'url("/images/header1.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
            />
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundImage: 'url("/images/header2.png")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#0057B8",
              borderRight: "none",
              position: "relative",
              top: 0,
            },
          }}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100vh", // full height
                width: 73, // sidebar width
                backgroundColor: "#0056B3", // blue background
                alignItems: "center",
                py: 2,
              }}
            >
              <List sx={{ p: 0, width: "100%" }}>
                {sidebarItems.map((item, index) => (
                  <ListItem key={index} sx={{ p: 0, justifyContent: "center" }}>
                    <Button
                      sx={{
                        minWidth: 0,
                        width: "100%",
                        height: 60,
                        borderRadius: 0, // square edges
                        backgroundColor: item.active
                          ? "#FF5E14"
                          : "transparent",
                        "&:hover": {
                          backgroundColor: item.active
                            ? "#FF5E14"
                            : "rgba(255,255,255,0.1)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          backgroundImage: `url("${item.icon}")`,
                          backgroundSize: "contain",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          filter: "brightness(0) invert(1)", // icons white
                        }}
                      />
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Bottom Section - Profile, Settings, Logout */}
            <Box sx={{ p: 1, pb: 2 }}>
              {/* Profile Image */}
              <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{
                    minWidth: 48,
                    width: 48,
                    height: 48,
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundImage: 'url("/images/profile.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </Button>
              </Box>
              {/* Settings */}
              <Box sx={{ mb: 1, display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{
                    minWidth: 48,
                    width: 48,
                    height: 48,
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundImage: 'url("/images/setting.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      filter: "brightness(0) invert(1)", // Makes the image white
                    }}
                  />
                </Button>
              </Box>

              {/* Logout */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{
                    minWidth: 48,
                    width: 48,
                    height: 48,
                  }}
                >
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      backgroundImage: 'url("/images/logout.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F3F6F9",
          }}
        >
          {/* Progress Steps */}
          <Box
            sx={{
              backgroundColor: "#F3F6F9",
              px: 4,
              paddingTop: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 45,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#0057B8",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  1
                </Box>
                <Typography sx={{ color: "black" }}>Create Shipment</Typography>
              </Box>

              <Box sx={{ width: 40, height: 2, backgroundColor: "#0057B8" }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 45,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid #0057B8",
                    backgroundColor: "#F3F6F9",
                    color: "#0057B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  2
                </Box>
                <Typography sx={{ fontWeight: 400, color: "black" }}>
                  Repacking & Consolidation
                </Typography>
              </Box>

              <Box sx={{ width: 40, height: 2, backgroundColor: "#0057B8" }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 45,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid #0057B8",
                    backgroundColor: "#F3F6F9",
                    color: "#0057B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  3
                </Box>
                <Typography sx={{ fontWeight: 400, color: "black" }}>
                  Shipment Details
                </Typography>
              </Box>

              <Box sx={{ width: 40, height: 2, backgroundColor: "#0057B8" }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 45,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid #0057B8",
                    backgroundColor: "#F3F6F9",
                    color: "#0057B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  4
                </Box>
                <Typography sx={{ fontWeight: 400, color: "black" }}>
                  Shipping Method
                </Typography>
              </Box>

              <Box sx={{ width: 40, height: 2, backgroundColor: "#0057B8" }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 45,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid #0057B8",
                    backgroundColor: "#F3F6F9",
                    color: "#0057B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  5
                </Box>
                <Typography sx={{ fontWeight: 400, color: "black" }}>
                  Summary & Confirmation
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1 }} />
            </Box>
          </Box>

          {/* Customer Info Section */}
          <Box sx={{ p: 4 }}>
            <Paper sx={{ p: 3, borderRadius: 3, backgroundColor: "white" }}>
              <Box
                sx={{ display: "flex", gap: 4, alignItems: "center", mb: 3 }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 50,
                      backgroundImage: 'url("/images/customername.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{ fontSize: "12px", color: "#666", mb: 0.5 }}
                    >
                      Customer name
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                      Adedamola Olarele
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ width: 2, height: 40, backgroundColor: "#e0e0e0" }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 50,
                      backgroundImage: 'url("/images/businessname.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{ fontSize: "12px", color: "#666", mb: 0.5 }}
                    >
                      Business name
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                      Dolf Technologies
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{ width: 2, height: 40, backgroundColor: "#e0e0e0" }}
                />

                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 50,
                      backgroundImage: 'url("/images/unitnumber.png")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{ fontSize: "12px", color: "#666", mb: 0.5 }}
                    >
                      Unit no.
                    </Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                      1E
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* Table Section */}
          <Box sx={{ flexGrow: 1, px: 4, pb: 4 }}>
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: 3,
                boxShadow: "none",
                border: "1px solid #ddd",
              }}
            >
              <Table>
                {/* Table Header */}
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#0057B8" }}>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                        width: "80px",
                        textAlign: "center",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      <Checkbox
                        sx={{
                          color: "white",
                          "&.Mui-checked": { color: "white" },
                        }}
                        checked={selectedItems.length === mockData.length}
                        indeterminate={
                          selectedItems.length > 0 &&
                          selectedItems.length < mockData.length
                        }
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      TRACKING ↕
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      WEIGHT & DIMENSIONS ↕
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      RECEIVED ↕
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      DESCRIPTION
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      PHOTOS
                    </TableCell>
                  </TableRow>
                </TableHead>

                {/* Table Body */}
                <TableBody>
                  {mockData.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        "&:hover": { backgroundColor: "#f8f9fa" },
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      {/* Checkbox + Row Number */}
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderRight: "1px solid #eee",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Checkbox
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
                            sx={{
                              color: "#0057B8",
                              "&.Mui-checked": { color: "#0057B8" },
                              padding: 0, // optional: removes extra space around checkbox
                            }}
                          />
                          <Typography
                            sx={{ fontSize: "14px", fontWeight: 600, ml: 1 }}
                          >
                            {item.id}
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* Tracking */}
                      <TableCell>
                        <Typography
                          sx={{ fontSize: "14px", fontFamily: "monospace" }}
                        >
                          {item.tracking}
                        </Typography>
                      </TableCell>

                      {/* Weight + Dimensions */}
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Typography sx={{ fontSize: "14px" }}>
                            {item.weight}
                          </Typography>

                          {/* vertical line separator */}
                          <Box
                            sx={{
                              width: "1px",
                              height: "16px",
                              backgroundColor: "#ccc",
                              mx: 1, // margin left/right
                            }}
                          />

                          <Typography sx={{ fontSize: "14px" }}>
                            {item.dimensions}
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* Received */}
                      <TableCell>
                        <Typography sx={{ fontSize: "14px" }}>
                          {item.received}
                        </Typography>
                      </TableCell>

                      {/* Description */}
                      <TableCell>
                        <Typography sx={{ fontSize: "14px", maxWidth: 300 }}>
                          {item.description}
                        </Typography>
                      </TableCell>

                      {/* Photos Button */}
                      <TableCell>
                        <Box sx={{ position: "relative" }}>
                          <Button
                            onClick={() => handlePhotoClick(item)}
                            sx={{
                              minWidth: 40,
                              width: 40,
                              height: 40,
                              borderRadius: 2,
                              color: "white",
                              fontSize: "12px",
                              fontWeight: "bold",
                              p: 0,
                              backgroundImage: "url('images/picture.png')", // <-- your image
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              "&:hover": {
                                opacity: 0.9,
                              },
                            }}
                          >
                            +{item.photos.length}
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: 2,
                px: 2,
              }}
            >
              {/* Left side: Showing text + dropdown */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                  Showing
                </Typography>
                <TextField
                  select
                  value={10}
                  size="small"
                  sx={{
                    width: 70,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      height: 32,
                    },
                  }}
                >
                  {[10, 20, 30, 50].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <Typography sx={{ fontSize: "14px", color: "#666" }}>
                  out of 50
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Pagination count={1} page={1} shape="rounded" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end", // aligns buttons to the right
                gap: 1,
                mt: 2,
                px: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  px: 3,
                  bgcolor: "#f5e6e6",
                  color: "#333",
                  "&:hover": { bgcolor: "#f0dcdc" },
                }}
              >
                Back
              </Button>

              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  px: 3,
                  bgcolor: "#0057B8",
                  color: "white",
                  "&:hover": { bgcolor: "#004999" },
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Photo Sidebar Panel */}
      <Drawer
        anchor="right"
        open={isDialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            width: 500,
            backgroundColor: "white",
            p: 3,
          },
        }}
      >
        {selectedItem && (
          <Box>
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                gap: 2,
              }}
            >
              {/* Up/Down Navigation Buttons (horizontal) */}
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mr: 2, gap: 1 }}>
                <IconButton
                  size="small"
                  sx={{backgroundColor: '#0057B8', color: 'white', borderRadius: 1, boxShadow: 1 }}
                  onClick={() => {
                    if (!selectedItem) return;
                    const currentIndex = mockData.findIndex(i => i.id === selectedItem.id);
                    const prevIndex = (currentIndex - 1 + mockData.length) % mockData.length;
                    setSelectedItem(mockData[prevIndex]);
                    setCurrentImageIndex(0);
                  }}
                >
                  <Box
                    component="img"
                    src="/images/up.png"
                    alt="Up"
                    sx={{ width: 20, height: 20, transform: 'rotate(180deg)' }}
                  />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{ backgroundColor: '#0057B8', color: 'white', borderRadius: 1, boxShadow: 1 }}
                  onClick={() => {
                    if (!selectedItem) return;
                    const currentIndex = mockData.findIndex(i => i.id === selectedItem.id);
                    const nextIndex = (currentIndex + 1) % mockData.length;
                    setSelectedItem(mockData[nextIndex]);
                    setCurrentImageIndex(0);
                  }}
                >
                  <Box
                    component="img"
                    src="/images/down.png"
                    alt="Down"
                    sx={{ width: 20, height: 20 }}
                  />
                </IconButton>
              </Box>
              <Typography sx={{ fontSize: "16px", color: "black", minWidth: 110 }}>
                {selectedItem ? `${mockData.findIndex(i => i.id === selectedItem.id) + 1} of ${mockData.length} Entries` : `1 of ${mockData.length} Entries`}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton onClick={handleCloseDialog} sx={{ color: "black" }}>
                ✕
              </IconButton>
            </Box>

            {/* Customer Info Card */}
            <Paper
              sx={{ p: 3, borderRadius: 3, mb: 3, backgroundColor: "#e3f2fd" }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}
              >
                <Box
                  component="img"
                  src="/images/customername.png"
                  alt="Customer"
                  sx={{ width: 24, height: 24, borderRadius: '50%' }}
                />
                <Typography sx={{ fontWeight: 600, color: "black" }}>
                  Adedamola Olarele (1E)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  component="img"
                  src="/images/businessname.png"
                  alt="Business"
                  sx={{ width: 24, height: 24, borderRadius: '50%' }}
                />
                <Typography sx={{ fontSize: "14px", color: "black" }}>
                  Dolf Technologies
                </Typography>
              </Box>
            </Paper>

            {/* Main Image */}
            <Box sx={{ position: "relative", mb: 3 }}>
              <Card sx={{ borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height={100}
                  image={selectedItem.photos[currentImageIndex]}
                  alt="Product"
                  sx={{ objectFit: "cover" }}
                />

                {/* Navigation Arrows */}
                {selectedItem.photos.length > 1 && (
                  <>
                    <IconButton
                      sx={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                      }}
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? selectedItem.photos.length - 1 : prev - 1
                        )
                      }
                    >
                      <NavigateBefore />
                    </IconButton>
                    <IconButton
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                      }}
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === selectedItem.photos.length - 1 ? 0 : prev + 1
                        )
                      }
                    >
                      <NavigateNext />
                    </IconButton>
                  </>
                )}
              </Card>
            </Box>

            {/* Thumbnail Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 2,
              }}
            >
              {selectedItem.photos.map((photo, index) => (
                <Box key={index}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      cursor: "pointer",
                      border:
                        currentImageIndex === index
                          ? "3px solid #0057B8"
                          : "3px solid transparent",
                      "&:hover": { opacity: 0.8 },
                    }}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <CardMedia
                      component="img"
                      height={120}
                      image={photo}
                      alt={`Product ${index + 1}`}
                      sx={{ objectFit: "cover" }}
                    />
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Drawer>
    </Box>
  );
}
