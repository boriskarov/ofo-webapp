<template>
  <v-app>
    <v-container>
      <v-row justify="center" align="center">
        <v-col v-if="showLogin" cols="12" md="4">
          <v-card>
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="username" label="Username" required></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
                <v-btn type="submit" color="primary">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col v-else-if="loggedIn" cols="12" md="4">
          <v-card>
            <v-card-title class="headline">File Upload</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="uploadFile">
                <v-file-input v-model="file" label="Choose a file" required></v-file-input>
                <v-btn type="submit" color="primary">Upload</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col v-if="uploadStatus" cols="12" md="8">
          <v-alert v-if="uploadStatus === 'success'" type="success">
            Upload successful! <a :href="secureLink">Access Data</a>
          </v-alert>
          <v-alert v-else-if="uploadStatus === 'error'" type="error">
            Error: {{ errorMessage }}
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showLogin: true,
      loggedIn: false,
      username: '',
      password: '',
      file: null,
      uploadStatus: null,
      errorMessage: '',
      secureLink: '',
    };
  },
  methods: {
    login() {
      this.showLogin = false;
      this.loggedIn = true;
    },
    uploadFile() {
      if (this.file) {
        // Simulate file validation
        // Replace this with your actual file validation logic
        const isValidFormat = true;

        if (isValidFormat) {
          // Simulate successful upload
          this.uploadStatus = 'success';
          this.secureLink = 'https://example.com/secure-link';
        } else {
          // Simulate error during upload
          this.uploadStatus = 'error';
          this.errorMessage = 'Invalid file format. Please upload a valid file.';
        }
      } else {
        // Simulate error when no file is selected
        this.uploadStatus = 'error';
        this.errorMessage = 'No file selected. Please choose a file to upload.';
      }
    },
  },
};
</script>

<style scoped>
v-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-card {
  width: 100%;
  max-width: 400px;
}

.v-card-title {
  background-color: #3498db;
  color: white;
  padding: 16px;
  border-radius: 4px 4px 0 0;
}

.v-card-text {
  padding: 16px;
}

.v-form {
  display: flex;
  flex-direction: column;
}

.v-btn {
  margin-top: 16px;
}
</style>
