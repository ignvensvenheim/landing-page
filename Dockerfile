# Stage 1: Serve with Nginx
FROM nginx:alpine

#Copying intranet files
COPY . /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (the web server port)
EXPOSE 80

# Start Nginx in the foreground (required for container to stay alive)
CMD ["nginx", "-g", "daemon off;"]