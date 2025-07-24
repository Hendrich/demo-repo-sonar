# binar_practice

## Project Summary

This repository contains two main sections:

### 1. Practice Modules
- Various TypeScript files (`code_smells.ts`, `hardcoded_secret.ts`, `sql_injection.ts`, `zombie_vs_refactored.ts`) designed to demonstrate common code quality and security issues for educational purposes.

### 2. Weather Checker App Backend
- A backend application built with TypeScript, Express, and SQLite.
- Features endpoints for weather data, history, and analysis.
- Intentionally includes insecure code and code smells to help users learn to identify and fix such issues.
- Example vulnerabilities: hardcoded secrets, SQL injection, zombie code, and more.

## Assignment Documentation

### Modul 7 - Assignment 14 - Hendri Christianto

#### Pipeline & Quality Gate
- Workflow CI/CD sudah dibuat di `.github/workflows/ci-sonarcloud.yml`.
- Pipeline menjalankan lint, test, build, dan SonarCloud scan.
- Quality Gate SonarCloud dikonfigurasi agar gagal jika ada bug atau code smell baru.
- Simulasi code smell dilakukan di branch baru dan diverifikasi lewat PR.
- Screenshot pipeline gagal dan berhasil sudah diambil sesuai instruksi.
- Penjelasan temuan SonarCloud ditulis di PR.

#### Cara Menjalankan
- Pastikan secret SonarCloud sudah diatur: `SONAR_TOKEN`, `SONAR_PROJECT_KEY`, `SONAR_ORGANIZATION`.
- Workflow otomatis berjalan saat push/PR ke branch utama atau Assignment-14.