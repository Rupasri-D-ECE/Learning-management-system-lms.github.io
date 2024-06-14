import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Course from '../models/courseModel.js'; // Adjust the path based on your project structure

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to MongoDB Atlas');

    // Sample data for courses or learning materials
    const data = [
      {
        title: "Introduction to JavaScript",
        description: "Learn the basics of JavaScript programming language.",
        category: "Programming",
        duration: "4 weeks",
        author: "John Doe",
        imageUrl: "https://example.com/intro-to-js.jpg",
        videoUrl: "https://drive.google.com/file/d/1HDPqLBwF1CxYAxAIPF8CgbVBhL5LPdrl/view",
        UploadBy: Math.floor(Math.random() * (9999 - 1000) + 1000),
        CourseID: Math.floor(Math.random() * (9999 - 1000) + 1000)
      },
      {
        title: "Data Structures and Algorithms",
        description: "Master data structures and algorithms with this comprehensive course.",
        category: "Computer Science",
        duration: "8 weeks",
        author: "Jane Smith",
        imageUrl: "https://example.com/data-structures.jpg",
        videoUrl: "https://drive.google.com/file/d/19eVogu9XcrcKbMXC-GwmrBole5Ui1cQ1/view",
        UploadBy: Math.floor(Math.random() * (9999 - 1000) + 1000),
        CourseID: Math.floor(Math.random() * (9999 - 1000) + 1000)
      },
      {
        title: "Introduction to Machine Learning",
        description: "Explore the fundamentals of machine learning and its applications.",
        category: "Artificial Intelligence",
        duration: "6 weeks",
        author: "Emily Johnson",
        imageUrl: "https://example.com/intro-to-ml.jpg",
        videoUrl: "https://drive.google.com/file/d/1DLfdFcSoVlTjbVFliT0gmoFq7bH0Woj5/view",
        UploadBy: Math.floor(Math.random() * (9999 - 1000) + 1000),
        CourseID: Math.floor(Math.random() * (9999 - 1000) + 1000)
      }
    ];

    try {
      // Insert sample courses or learning materials
      await Course.insertMany(data);
      console.log('Data uploaded successfully');

    } catch (err) {
      console.error('Error uploading data:', err);
    } finally {
      mongoose.disconnect();
    }

  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
