# Set locale, terminal, editors, and umask
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 TERMINAL=konsole EDITOR=nano VISUAL=subl && umask 027

# Initialize version managers for use with window managers
export CARGO_HOME=$HOME/.cargo && export PATH=$CARGO_HOME/bin:$PATH
