<template>
    <div class=" h-screen flex items-center justify-center bg-gray-50">
        <div class=" max-w-md w-full bg-white shadow-xl rounded-lg p-6 sm:p-8">
            <h2 class="text-center text-3xl font-extrabold text-blue-600">
                Login
            </h2>
            <form @submit.prevent="submit" class=" space-y-6 mt-6">
                <div>
                    <label for="username" class="block  text-gray-600 font-semibold">
                        Username
                    </label>
                    <input v-model="form.username" type="text"
                        class=" border w-full rounded-lg border-gray-300 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        placeholder="Enter your username" required>
                </div>
                <div>
                    <label for="password" class="block text-gray-600 font-semibold">
                        Password
                    </label>
                    <div class="relative">
                        <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                            class=" border w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            placeholder="Enter your password" required>
                        <span class="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500"
                            @click="togglePassword">
                            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                        </span>
                    </div>

                </div>
                <p v-if="err" class=" text-sm text-red-500 mt-2"> {{ err }}</p>
                <button type="submit"
                    class=" bg-blue-600 text-white w-full font-semibold rounded-lg py-3 hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="isLoading">
                    {{ isLoading ? "Submiting..." : "Submit" }}
                </button>
            </form>
            <p class=" text-center text-sm mt-2"> Don't have an account yet?
                <span class="cursor-pointer text-blue-500">
                    <RouterLink to="/register">Create an Account</RouterLink>
                </span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL
const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 5000
})

const initForm = {
    username: '',
    password: ''
}
const form = ref({ ...initForm })
const err = ref('')
const isLoading = ref(false)
const showPassword = ref(false)

function togglePassword() {
    showPassword.value = !showPassword.value
}

async function submit() {
    if (isLoading.value || !validateForm()) return
    isLoading.value = true
    try {
        const { data } = await apiClient.post("users/login", {
            username: form.value.username,
            password: form.value.password
        })
        alert(data.message)
        form.value = { ...initForm }
        err.value = ''
    } catch (error) {
        console.error("error", error.response)
        err.value = error.response?.data?.detail || 'An unexpected error occurred.'
    } finally {
        isLoading.value = false
    }
}

function validateForm() {
    if (form.value.username.length < 6 || form.value.username.length > 20) {
        err.value = "Username must be between 6 and 20 chacracters long."
        return false
    }
    if (form.value.password.length < 6 || form.value.password.length > 20) {
        err.value = "Password must be between 6 and 20 chacracters long."
        return false
    }
    if (!/^[a-z][a-z0-9]*$/.test(form.value.username)) {
        err.value = 'Username must start with a lowercase letter and contain only lowercase letters or digits.'
        return false
    }
    err.va = ''
    return true
}

</script>